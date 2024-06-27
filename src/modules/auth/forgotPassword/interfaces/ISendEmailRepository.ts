

export interface ISendEmailRepository {
    sendEmail(context: Record<string, any>, template: string): void;
  }
