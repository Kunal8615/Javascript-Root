let n = 8;
for (let i = 1; i <= n; i++) {
   
    for (let j = 1; j <= n-i; j++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
