var n = 7;

for (x = 0; x < n; x++){
    for (y = 0; y < x; y++){
        if (x + y) {
            document.write(y+" " )
        } else{
            document.write('')
        }
    }
    document.write('<br>')
}