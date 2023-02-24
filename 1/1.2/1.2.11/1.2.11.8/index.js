if (-1 || 0) alert( 'first' ); // -1, alert( 'first' );
if (-1 && 0) alert( 'second' ); // 0 не выпонится;
if (null || -1 && 1) alert( 'third' );// 1, alert( 'third' );