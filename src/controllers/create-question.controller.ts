import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller()
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  @Post()
  async handle() {
    return 'ok'
  }
}
