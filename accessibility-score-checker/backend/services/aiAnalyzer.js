async function calculateScore(result) {
    let violation = 0;
    result.violations.forEach(v => {
        console.log(v.id, v.impact, v.description)
        v.nodes.forEach(n => console.log(n.html, n.failureSummary));
        violation++;
    })

    let check = 0
    result.incomplete.forEach(i => {
        console.log(i.id, i.impact, i.description)
        i.nodes.forEach(n => console.log(n.html, n.failureSummary))
        check++
    })

    let final_score = 100 - (violation * 100) - (check * 50);
    return final_score
}
module.exports = { calculateScore };