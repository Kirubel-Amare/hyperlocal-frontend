/**
 * Base API Client for Hyperlocal
 * Designed to handle both mock data (current) and real endpoints (future).
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

class ApiClient {
    private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        const config = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        }

        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, config)

            if (!response.ok) {
                const error = await response.json().catch(() => ({ message: 'API Request failed' }))
                throw new Error(error.message || 'API Request failed')
            }

            return await response.json()
        } catch (error) {
            console.error('API Error:', error)
            throw error
        }
    }

    async get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'GET' })
    }

    async post<T>(endpoint: string, body: any, options: RequestInit = {}): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) })
    }

    async put<T>(endpoint: string, body: any, options: RequestInit = {}): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) })
    }

    async delete<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'DELETE' })
    }
}

export const apiClient = new ApiClient()
