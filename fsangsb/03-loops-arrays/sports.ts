let sports: string[] = ['Golf', 'Cricket', 'Tennis', 'Swimming'];

console.log('For loop:');
for (let i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}

console.log('\nSimplyfied for each loop:');
for (let sport of sports) {
    if (sport == 'Cricket') {
        console.log(sport + ' << My Favorite!');
    } else {
        console.log(sport);
    }
}
