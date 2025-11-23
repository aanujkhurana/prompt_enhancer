export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    // 1. Validation
    if (!body.prompt || typeof body.prompt !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: 'Prompt is required and must be a string.'
        })
    }

    if (body.prompt.length > 1000) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Prompt is too long (max 1000 characters).'
        })
    }

    // 2. Rate Limiting (Simple In-Memory for MVP)
    // In production, use Redis or KV
    const ip = getRequestIP(event) || 'unknown'
    // TODO: Implement actual rate limiting logic if needed, 
    // for now we'll rely on the client-side debounce and API key limits.
    // A simple check:
    if (!globalThis.rateLimit) globalThis.rateLimit = {}
    const lastRequest = globalThis.rateLimit[ip]
    const now = Date.now()
    if (lastRequest && now - lastRequest < 2000) { // 2 seconds cooldown
        throw createError({
            statusCode: 429,
            statusMessage: 'Too many requests. Please wait a moment.'
        })
    }
    globalThis.rateLimit[ip] = now

    // 3. LLM Call
    const apiKey = process.env.NUXT_OPENAI_API_KEY || process.env.OPENAI_API_KEY

    if (!apiKey) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Server configuration error: API Key missing.'
        })
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini', // Efficient model
                messages: [
                    {
                        role: 'system',
                        content: 'You are an expert prompt engineer. Rewrite the user’s prompt so it is clearer, more specific, structured, and more effective for AI models. Keep the meaning the same. Output ONLY the improved prompt. Do not add conversational text.'
                    },
                    {
                        role: 'user',
                        content: body.prompt
                    }
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        })

        if (!response.ok) {
            const errorData = await response.json()
            console.error('OpenAI API Error:', errorData)
            throw new Error('Failed to fetch from OpenAI')
        }

        const data = await response.json()
        const enhancedPrompt = data.choices[0]?.message?.content?.trim()

        return {
            enhancedPrompt
        }
    } catch (error) {
        console.error('Enhance Error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to enhance prompt.'
        })
    }
})
