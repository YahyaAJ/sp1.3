var n = 10;

for (x = 1; x < n; x++) {
    for (y = 1; y < n; y++) {
        if (y % 2){
            document.write(' +'+'&nbsp')
        } else {
            document.write(' -'+'&nbsp')
        }
    }
    document.write('<br>')
}