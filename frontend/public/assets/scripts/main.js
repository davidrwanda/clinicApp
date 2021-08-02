
        function printDiv() {
            var divContents = document.getElementById("invoice").innerHTML;
            var header = document.getElementById("header").innerHTML;
            var a = window.open('', '', 'height=auto, width=600');
            a.document.write('<html>');
            a.document.write(header);
            a.document.write('<body > <h1>Div contents are <br>');
            a.document.write(divContents);
            a.document.write('</body></html>');
            a.document.close();
            a.print();
        }
        
