export type PerfReview<T> = T extends AsyncGenerator<infer K> ? K : never
