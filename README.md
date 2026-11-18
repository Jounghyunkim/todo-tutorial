# Todo Tutorial

[Claude Code Playbook](https://docs.claude-hunt.com) 강의의 실습용 저장소입니다. Next.js 와 shadcn/ui 로 시작하는 작은 Todo 앱을 단계별로 발전시키며 Claude Code 사용법을 익힙니다.

## 관련 링크

- 강의 본문: https://docs.claude-hunt.com
- 수강생 결과물 공유: https://claude-hunt.com

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-maia 스타일, taupe 베이스)
- TypeScript / ESLint / Prettier
- 패키지 매니저: bun 1.3.6

## 시작하기

### 0. 사전 준비

아래 도구가 설치되어 있어야 합니다. 터미널에서 버전이 출력되는지 확인하세요.

| 도구 | 필요 버전 | 확인 명령 |
| --- | --- | --- |
| [Git](https://git-scm.com/) | 아무 최신 버전 | `git --version` |
| [Node.js](https://nodejs.org/) | 20.9 이상 (Next.js 16 요구사항) | `node --version` |
| [bun](https://bun.sh/) | 1.3 이상 | `bun --version` |

bun 이 없다면 공식 설치 스크립트로 설치합니다.

```bash
# macOS / Linux
curl -fsSL https://bun.sh/install | bash
```

```powershell
# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
```

설치 후 터미널을 새로 열어야 `bun` 명령이 인식됩니다.

### 1. 저장소 받기

```bash
git clone https://github.com/Jounghyunkim/todo-tutorial.git
cd todo-tutorial
```

### 2. 의존성 설치

```bash
bun install
```

`bun.lock` 에 고정된 버전으로 설치됩니다. 별도의 `.env` 설정은 필요 없습니다.

### 3. 개발 서버 실행

```bash
bun dev
```

터미널에 `✓ Ready` 가 뜨면 브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다. 첫 페이지 요청 때 컴파일이 일어나 몇 초 걸릴 수 있습니다. 종료는 `Ctrl + C` 입니다.

3000 포트가 이미 사용 중이면 다른 포트를 지정합니다.

```bash
bun dev -p 3001
```

### 4. 잘 동작하는지 확인 (선택)

```bash
bun run lint       # ESLint 검사
bun run typecheck  # 타입 검사 (tsc --noEmit)
bun run test       # Vitest 테스트 실행
```

세 명령 모두 에러 없이 끝나면 개발 환경 준비가 끝난 것입니다.

### 프로덕션 빌드로 실행해 보기

```bash
bun run build      # .next 에 프로덕션 빌드 생성
bun run start      # 빌드 결과를 http://localhost:3000 에서 실행
```

`bun run start` 는 반드시 `bun run build` 를 먼저 실행한 뒤에 사용합니다. 포트 변경은 `bun run start -p 3001` 처럼 합니다.

### 스크립트 모음

| 명령 | 설명 |
| --- | --- |
| `bun dev` | 개발 서버 실행 (Turbopack) |
| `bun run build` | 프로덕션 빌드 |
| `bun run start` | 빌드 결과 실행 |
| `bun run lint` | ESLint |
| `bun run typecheck` | `tsc --noEmit` |
| `bun run test` | Vitest 1회 실행 |
| `bun run test:watch` | Vitest 감시 모드 |
| `bun run format` | Prettier 로 모든 `.ts`/`.tsx` 파일 포맷팅 |

> `bun run format` 은 파일을 직접 고쳐 씁니다. 현재 코드 중 일부는 포맷이 맞지 않아 실행하면 여러 파일이 한꺼번에 바뀔 수 있으니, 작업 중인 변경과 섞이지 않도록 `git status` 로 확인한 뒤 실행하세요.

## 챕터별 시작 브랜치

각 레슨은 시작 시점의 코드 상태를 브랜치로 제공합니다. 레슨 본문에서 안내하는 브랜치로 전환한 뒤 따라가시면 됩니다.

```shell
git checkout ch02-03
```

`pathspec 'ch02-03' did not match` 에러가 나면 지금 받은 저장소에 해당 브랜치가 없는 것입니다. `git branch -r` 로 받을 수 있는 브랜치를 확인하고, 없다면 강의 본문에서 안내하는 원본 저장소에서 받으세요.

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button";
```

## Contributors

- 토이크레인 - Frontend Developer
