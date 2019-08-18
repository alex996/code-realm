export interface PostPreview {
  title: string
  subtitle: string
  slug: string
  readingTime: string
  tags: string[]
  createdAt: string
}

export interface PostDetails extends PostPreview {
  body: string
}

export interface HttpError {
  code: number
  message: string
}
