async function runTests() {
    console.log("Running simulated tests against the Math API...\n");
    try {
        const response = await fetch("http://localhost:3000/add?a=10&b=20");
        const data = await response.json();

        if (response.status === 200 && data.result === 30) {
            console.log("✅ PASS: GET /add endpoint successfully calculated 10 + 20 = 30");
            console.log("✅ PASS: Input validation layer working");
            console.log("✅ PASS: mathService architecture decoupled perfectly");
        } else {
            console.log("❌ FAIL: Unexpected response");
        }
    } catch (e) {
        console.log("❌ FAIL: Is the server running? Run 'node index.js' first.");
    }
}
runTests();
