/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// Programa 6: Peça de Xadrez
function Chess(piece) {
  let piecename = piece.toLowerCase();
  let movement = '';
  if (piecename === 'king') {
    movement = `${piecename}:one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, know as castling`;
  } else if (piecename === 'queen') {
    movement = `${piecename}: diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.`;
  } else if (piecename === 'rooks') {
    movement = `${piecename}: horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.`;
  } else if (piecename === 'bishop')
    movement = `${piecename}: diagonally any number of squares. They are unable to jump over pieces.`;
  else if (piecename === 'knight') {
    movement = `${piecename}: in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.`;
  } else if (piecename === 'pawns') {
    movement = `${piecename}:vertically forward one square, with the option to move two squares if they have not yet moved`;
  } else {
    movement = 'Piece does not exist';
  }
  console.log(movement);
  return movement;
}
Chess('Queen');
Chess('rooks');
Chess('bishop');
Chess('knight');
Chess('pawns');
