/**
 * After calling the method can you...
 *                              Seal    Freeze      PreventExtensions
 * add a new prop               x       x           x
 * edit an existing prop        1       x           1
 * delete a prop                x       x           1
 * reassign __proto__           x       x           x
 * cahnge discriptors           x       x           1
 */

// If you freeze an object you cannot change anything
// If you seal an objct you can only edit the current prop value
// PE is much more lineant you can edit, delete and change the discriptors
