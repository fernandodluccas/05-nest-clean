import { Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decoretor'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { UserPayload } from 'src/auth/jwt.strategy'

@Controller()
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  @Post('questions')
  async handle(@CurrentUser() user: UserPayload) {
    console.log(user.sub)
    return 'ok'
  }
}
