export class SendEmailDto {
    to: string
    subject: string
    context?: Record<string, unknown>;
}