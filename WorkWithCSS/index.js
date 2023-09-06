function many() {
  //   let r = [];
  //   for (let i = 0; i < 17; i++) {
  //     r.push(i);
  //   }
  //   return r;
  document.write('<div width="100%">');
  for (i = 1; i < 6; i++) {
    document.writeln('<div>');
    for (j = 1; j < 6; j++) document.write('<div>' + i + j + '</div>');
    document.writeln('</div>');
  }
  document.write('</div> ');
}
