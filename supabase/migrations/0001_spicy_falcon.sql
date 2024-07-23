ALTER TABLE "users" ALTER COLUMN "clerk_origin" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "clerk_origin" SET NOT NULL;