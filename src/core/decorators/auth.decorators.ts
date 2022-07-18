import { applyDecorators, UseGuards } from "@nestjs/common";
import { AuthLocalGuard } from "../../auth/guards/auth.local.guard";
import { AuthJwtAccessGuard } from "../../auth/guards/auth.jwt.access.guard";
import { AuthJwtRefreshGuard } from "../../auth/guards/auth.jwt.refresh.guard";
import { AuthGoogleGuard } from "../../auth/guards/auth.google.guard";

export function LocalAuth(dto?: unknown) {
  return applyDecorators(
    UseGuards(AuthLocalGuard)
  )
}

export function JwtAccess(dto?: unknown) {
  return applyDecorators(
    UseGuards(AuthJwtAccessGuard)
  )
}

export function JwtRefresh(dto?: unknown) {
  return applyDecorators(
    UseGuards(AuthJwtRefreshGuard)
  )
}

export function GoogleAuth(dto?: unknown) {
  return applyDecorators(
    UseGuards(AuthGoogleGuard)
  )
}