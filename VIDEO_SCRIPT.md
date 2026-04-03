# Your Assignment 4 Video Walkthrough Script

Keep this file open on one side of your screen while you record your video. 

## The Video Script

### Part 1: Show the MCP Setup
1. **VS Code:** Open `.vscode/cline_mcp_settings.json` and say, "Here is the MCP config for my VS Code environment, setting up Context7, NotebookLM, and Playwright."
2. **Codex:** Open `.codex/codex.json` and say, "And here is the Codex configuration."
3. **Demonstrating an MCP Live:**
   - In your AI Chat Sidebar, run this prompt: `Please use the Playwright MCP to go to example.com and verify you can read it.`
   - "As you can see, the Playwright MCP works successfully."

### Part 2: Show the Skills Setup
1. Point to the `.skills` folder in your left sidebar. "Here are the Matt Pocock skills installed directly into my workspace context so the AI can use them."

### Part 3: The Workflow Demo (The Main Event)

**Step 1: Challenge the Idea (`grill-me`)**
Copy and paste this into the AI Chat Sidebar:
> *I want to build a simple Node.js API with a single `/add` endpoint that takes two numbers and returns their sum. Please use the local `.skills/grill-me/SKILL.md` skill to challenge my plan and ask me questions.*
(Answer any questions the AI asks simply. e.g. "Just a basic script, no database").

**Step 2: Generate the PRD (`write-a-prd`)**
Copy and paste:
> *Based on our discussion, use the `.skills/write-a-prd/SKILL.md` skill to write a PRD for this Math API. Save it to `PRD.md`.*

**Step 3: Generate the Issues (`prd-to-issues`)**
Copy and paste:
> *Use the `.skills/prd-to-issues/SKILL.md` skill to read `PRD.md` and generate GitHub issues. (If my GitHub CLI is offline, just generate the text of what the issues would be in this chat).*

**Step 4: Develop via TDD (`tdd`)**
Copy and paste:
> *Let's build the app. Use the `.skills/tdd/SKILL.md` skill to implement the `/add` endpoint. Start by writing a test for 1+2=3, watch it fail, and then write the Express API code to make it pass.*

**Step 5: Refactoring (`improve-codebase-architecture`)**
Copy and paste:
> *Use the `.skills/improve-codebase-architecture/SKILL.md` skill to review the code you just wrote. Refactor it so the math logic (addition) is separated from the Express routing into its own service file.*

### Part 4: Final Showcase
- In your terminal, run `npm test` or `node index.js`. 
- Open your browser to `http://localhost:3000/add?a=5&b=25` to show the final Math API working (`{"result": 30}`).
- Stop recording.
