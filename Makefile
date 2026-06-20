## Run dev server with drafts and future-dated pages
.PHONY: dev
dev:
	hugo server -D --buildFuture

## Build the site into public/
.PHONY: build
build:
	hugo --minify

## Remove build artifacts
.PHONY: clean
clean:
	rm -rf public resources .hugo_build.lock
