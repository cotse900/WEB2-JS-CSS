/**
 * WEB222 – Assignment 1
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Chungon Tse
 *      Student ID:
 *      Date: JUN 13, 2021//re-implemented MAY 2, 2022
 *
 * Please see all unit tests in the files problem-00.test.js, problem-01.test.js, etc.
 */

/*******************************************************************************
 *
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive in let's spend a
 * minute helping you learn how to read this code. You need to read the 
 * information in the Problem's comment to understand what they expect from 
 * your code's implementation.
 *
 * You'll see comments like this one:
 *
 * @param {string} name - the name to greet in the message
 * @returns {string}
 *
 * These are specially formatted comments that define parameters to functions,
 * and tell us the type {string} or {number}, and also the parameter's name.
 * We also indicate the return type for functions and a bit about how the 
 * parameter is used, and what data it will have, whether it's optional, etc.

******************************************************************************/

/*******************************************************************************
 * Problem 0: learn how to implement code to pass unit tests.
 *
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive in let's spend a
 * minute helping you learn how to read this code, and how to understand the
 * tests that go with it.
 *
 * In addition to this file, please also open the src/problem-00.test.js file.
 * Start by reading the comment at the top of that file, then come back here and
 * continue.
 *
 * Make sure you have completed the necessary Setup (install node.js, run `npm install`
 * before continuing).  The rest of the instructions assume that you have done this.
 *
 * After you finish reading src/problem-00.test.js, it's time to try running
 * the tests.  To run the tests, go to your terminal and type the following command:
 *
 *   npm test
 *
 * You have to run this command in the root of your project (i.e., in the same
 * directory as src/ and package.json).  When you do, you will see a lot of failures.
 * That's expected, since we haven't written any solution code yet.
 *
 * You can also run tests for only this problem instead of everything.  To do that:
 *
 *   npm test problem-00
 *
 * This will look for tests that are part of the problem-00.test.js file, and only
 * run those.  Doing so should result in 1 failed and 1 passed test.
 *
 * The first test passes:
 *
 *  ✓ greeting should be a function (2ms)
 *
 * But the second one failed:
 *
 * ✕ greeting should  return the correct string output (3ms)
 *
 * ● Problem 0 - greeting() function › greeting should  return the correct string output
 *
 *   expect(received).toBe(expected) // Object.is equality
 *
 *   Expected: "Hello WEB222 Student!"
 *   Received: "Hello WEB222 Student"
 *
 *     63 |   test('greeting should return the correct string output', function() {
 *     64 |     let result = greeting('WEB222 Student');
 *   > 65 |     expect(result).toBe('Hello WEB222 Student!');
 *        |                    ^
 *     66 |   });
 *     67 |
 *     68 |   /**
 *
 * We can see that the test 'greeting should say "Hello Name!"' is failing.
 * It's failing on line 65 of src/problem-00.test.js.  In particular, it's failing
 * because it expected to get the String "Hello WEB222 Student!" but instead
 * it actually received the String "Hello WEB222 Student".
 *
 * It looks like we have a small typo in our code below, and we are missing
 * the final "!"" character.  Try adding it below, save this file, and re-run the
 * tests again:
 *
 * npm test problem-00
 * PASS  src/problem-00.test.js
 *  Problem 0 - greeting() function
 *   ✓ greeting should be a function (2ms)
 *   ✓ greeting should return the correct string output
 *
 * Test Suites: 1 passed, 1 total
 * Tests:       2 passed, 2 total
 *
 * Excellent! At this point you're ready to move on to Problem 1. As you do,
 * read both the information in the Problem's comment, and also read the tests
 * to understand what they expect from your code's implementation.
 *
 * One final word about these comments.  You'll see comments like this one:
 *
 * @param {string} name - the name to greet in the message
 * @returns {string}
 *
 * These are specially formatted comments that define parameters to functions,
 * and tell us the type {string} or {number}, and also the parameter's name.
 * We also indicate the return type for functions.
 *
 * Finally, we also explain a bit about how the parameter is used, and what
 * data it will have, whether it's optional, etc.
 ******************************************************************************/

 function greeting(name) {
  return `Hello ${name}`;
}

/*******************************************************************************
 * Problem 1: remove all spaces and dashes from a String value, and make it lowercase.
 *
 * We want to be able to "crush" a string so that it contains no spaces or dashes,
 * and all letters are lower case.  The crush() function should work like this:
 *
 * crush('ABC') --> returns 'abc' (all lowercase)
 * crush('abc') --> returns 'abc' (the string was already correct, same value)
 * crush('A BC') --> returns 'abc' (lowercase, space removed)
 * crush('a b- c') --> returns 'abc' (lowercase, spaces removed, dash removed)
 *
 * @param {String} value - a string to be crushed
 ******************************************************************************/

function crush(value){ 
  let string;
  string = value
    .replace(/\s+/gi, '')
    .replace(/-/gi, '')
    .toLowerCase();
  return string;
}

/*******************************************************************************
 * Problem 2: create an HTML <img> element for the given url and alt text.
 *
 * In HTML, we use markup syntax to indicate how browsers should format elements
 * of a web page.  For example, here is a URL to a cat picture:
 *
 * https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500
 *
 * Try navigating to it in your browser.  In order for a web page to know how to
 * interpret this URL (e.g., should we show the text of the URL itself, or use
 * it to load an image?), we have to use special markup.  The <img> element
 * is how we specify that a URL is to be interpreted as an image, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
 *
 * Here is how we might use HTML to markup this image:
 *
 * <img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down">
 *
 * Our <img> has two attributes:
 *
 * - src: the URL to use when downloading this image's data
 * - alt: the alternative text to display in non-visual browsing environments (e.g., screen readers)
 *
 * Write the createImg() function to accept a URL and alt text, and return the
 * properly formatted img element.  For example:
 *
 * createImg('https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500', 'Cat with ears down')
 *
 * should return the following string of HTML:
 *
 * '<img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down">'
 *
 * An <img> can also optionally contain a width attribute, for example:
 *
 * <img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down" width="300">
 *
 * In this case, the <img> element should use 300 pixels for its width.  Therefore,
 * your createImg() function should also accept a third argument, width:
 *
 * // No width given
 * createImg('https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500', 'Cat with ears down')
 * // Width of 300 given
 * createImg('https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500', 'Cat with ears down', 300)
 *
 * The returned <img> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src and alt values before you use them
 * - The src and alt attribute values should be wrapped in double-quotes (e.g., src="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." alt="...")
 * - The width attribute should only be added if a valid integer value (number or string) is passed
 *   for the third argument.  Otherwise ignore it.
 *
 * @param {string} src - the src URL for the img
 * @param {string} alt - the alt text to use for the img
 * @param {string|number} width - (optional) the width of the img. Must be a valid integer
 * @returns {string}
 ******************************************************************************/
 function createImg(src, alt, width) {
  src = src.trim();
  alt = alt.trim();
  if (!isFinite(width)){
    return '<img src="' + src + '" alt="' + alt + '">';
  }
  else {
    return '<img src="' + src + '" alt="' + alt + '" ' + 'width="' + width + '">';
  }
 }

/*******************************************************************************
 * Problem 3: extract Date from date string
 *
 * A date string is expected to be formatted as follows:
 *
 * YYYY-DD-MM
 *
 * Meaning, Year (4 digits), Day (2 digits), Month (2 digits).
 *
 * January 1, 2021 would therefore be the following date string:
 *
 * 2021-01-01
 *
 * Similarly, September 29, 2021 would be:
 *
 * 2021-29-09
 *
 * Write a function, parseDateString() that accepts a date string of the format
 * specified above, and returns a Date object, set to the correct day.
 *
 * To help developers using your function, you are asked to provide detailed error
 * messages when the date string is formatted incorrectly.  We will use the throw
 * statement to throw an error when a particular value is not what we expect, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * For example: parseDateString('01-01-01') should fail, because the year is
 * not 4 digits.  Similarly, parseDateString('2021-1-01') should fail because
 * the day is not 2 digits, and parseDateString('2021-01-1') should fail because
 * the month is not 2 digits.  Also, a totally invalid date string should also
 * cause an exception to be thrown, for example parseDateString(null) or
 * parseDateString("this is totally wrong").
 *
 * @param {string} value - a date string
 * @returns {Date}
 ******************************************************************************/

function parseDateString(value) {
  var date_values = value.split('-');
  if(date_values[0].length === 4 && date_values[1].length === 2 && date_values[2].length === 2 ){
    return(new Date(value));
  }
  else
  {
    console.log('this is totally wrong');
    return null;
  }
}

/*******************************************************************************
 * Problem 4: convert Date to date string with specified format.
 *
 * As above, a date string is expected to be formatted as follows:
 *
 * YYYY-DD-MM
 *
 * Meaning, Year (4 digits), Day (2 digits), Month (2 digits).
 *
 * Write a function, toDateString() that accepts a Date object, and returns a
 * date string formatted according to the specification above. Make sure your
 * day and month values are padded with a leading '0' if necessary (e.g., 03 vs. 3).
 *
 * NOTE: it should be possible to use parseDateString() from the previous question
 * and toDateString() to reverse each other. For example:
 *
 * toDateString(parseDateString('2021-29-01)) should return '2021-29-01'
 *
 * @param {Date} value - a date
 * @returns {string}
 ******************************************************************************/
function twoDigitPad(num) {
  return (num < 10 ? '0' : '') + num
}

function toDateString(value) {
  result_string = value.getUTCFullYear()
  + '-' + twoDigitPad(value.getUTCMonth()+1)
  + '-' + twoDigitPad(value.getUTCDate());

  return result_string;
}

/*******************************************************************************
 * Problem 5: validate a coordinate
 *
 * Coordinates are defined as numeric, decimal values of Latitude and Longitude.
 * A example, the Seneca College Newnham campus is located at:
 *
 * Latitude: 43.7955 (positive number means North)
 * Longitude: -79.3496 (negative number means West)
 *
 * Write a function, validateCoord(), which accepts a latitude and longitude,
 * and returns true if they are both valid, or false if one or both are invalid.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * @param {number} lat - the latitude
 * @param {number} lng - the longitude
 * @returns {boolean}
 ******************************************************************************/

function lat(value)
{
  result = 0;
  if (value >= -90 && value <= 90)
  {
    result = 1;
  }
  else
    result = 0;
    return result;
}
function lng(value)
{
  result = 0;
  if (value >= -180 && value <= 180)
  {
    result = 1;
  }
  else result = 0;
  return result;
}
function validateCoord(inputlat, inputlng) {
  return (lat(inputlat) && lng(inputlng));
}

/*******************************************************************************
 * Problem 6, Part 1: format a coordinate as a string
 *
 * As above, coordinates are defined as numeric, decimal values of Latitude and Longitude.
 *
 * Write a function, formatCoord(), which accepts a latitude and longitude,
 * and returns a string formatted as follows:
 *
 * (lat, lng)
 *
 * For example:
 *
 * formatCoord(43.7955, -79.3496) should return the string '43.7955,-79.3496'.
 *
 * An optional third param, includeBrackets, determines whether or not to include
 * parenthesis around the formatted coordinate:
 *
 * formatCoord(43.7955, -79.3496) should return the string '43.7955,-79.3496'.
 * formatCoord(43.7955, -79.3496, true) should return the string '[43.7955,-79.3496]'.
 *
 * Use your validateCoord() function from Problem 5 to determine if the coordinate
 * is valid before you attempt to format it.  If the coordinate is not valid, throw
 * an exception.
 *
 * @param {number} lat - the latitude
 * @param {number} lng - the longitude
 * @param {boolean} includeBrackets - (optional) whether to include the square brackets
 * @returns {string}
 ******************************************************************************/

function formatCoord(lat, lng, includeBrackets) {
  var result = "";
  if (validateCoord(lat, lng)){
    if (includeBrackets){
    result = '[' + lat + ',' + lng + ']';
    }
    else {
    result = lat + ',' + lng;
    }
    return result;
  }
  throw new Error('Error!'); 
}

/*******************************************************************************
 * Problem 6, Part 2: format any number of coordinates as a string
 *
 * Similar to Problem 6 Part 1, you are asked to format lat, lng coordinates
 * into a string. However, where formatCoord() formats a single lat, lng pair,
 * the formatCoords() function (note the `s` suffix) is able to format any
 * number of lag, lng pairs.
 *
 * For example:
 *
 * formatCoords(43.7955, -79.3496) should return '[[43.7955,-79.3496]]'
 * formatCoords(43.7955, -79.3496, 43.7953, -79.3491) should return '[[43.7955,-79.3496], [43.7953,-79.3491]]'
 *
 * In your solution for formatCoords, use the formatCoord function you wrote above.
 *
 * The formatCoords() function can take any number of arguments, but they must all be numbers,
 * there must be an even number of them, and all lat, lng pairs should be valid.
 *
 * If any of these conditions are not met, throw an exception.
 *
 * @param {number} arguments - any number of arguments can be passed, but there must be an even number
 * @returns {string}
 ******************************************************************************/

function formatCoords(...values) {
  if (values.length % 2 !== 0)
    throw new Error('invalid lat lng pair');
  var i = 0;
  var store = [];
  for (i = 0; i < values.length; i += 2){
    if (validateCoord(values[i], values[i+1]))
      list.push(formatCoord(values[i], values[i+1], true));
    else throw new Error ('invalid lat lng pair');
  }
  return '[' + list.join(' ,') + ']';
}

/*******************************************************************************
 * Problem 7: determine MIME type from filename extension
 *
 * Web browsers and servers exchange streams of bytes, which must be interpreted
 * by the receiver based on their type.  For example, an HTML web page is
 * plain text, while a JPG image is a binary sequence.
 *
 * The Content-Type header contains information about a resource's MIME type, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 *
 * The MIME type is made-up of a `type` and a `subtype` separated by a `/` character.
 * The type is general, for example, 'text' or 'video'.  The subtype is more
 * specific, indicating the specific type of text, image, video, etc.  See:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 *
 * A number of common types are used in web development:
 *
 * mimeFromFilename('/User/Documents/readme.txt') --> returns 'text/plain'
 *
 * Your mimeFromFilename() function should support all of the following extensions
 * with and without the leading '.':
 *
 * - .html, .htm --> text/html
 * - .css --> text/css
 * - .js --> text/javascript
 * - .jpg, .jpeg --> image/jpeg
 * - .gif --> image/gif
 * - .bmp --> image/bmp
 * - .ico, .cur --> image/x-icon
 * - .png --> image/png
 * - .svg --> image/svg+xml
 * - .webp --> image/webp
 * - .mp3 --> audio/mp3
 * - .wav --> audio/wav
 * - .mp4 --> video/mp4
 * - .webm --> video/webm
 * - .json --> application/json
 *
 * NOTE: any other extension should use the `application/octet-stream` MIME type,
 * to indicate that it is an unknown stream of bytes (e.g., binary file). You should
 * also use `application/octet-stream` if the file has no extension.
 *
 * @param {string} filename - a filename
 * @returns {string}
 ******************************************************************************/

function mimeFromFilename(filename) {
  result = 0;
  var dot = filename.lastIndexOf(".");
  var filenem = filename.substring(dot + 1, filename.length).toLowerCase();

  switch(filenem){
  case 'html':
  case 'htm':
    result = 'text/html';
    break;
  case 'css':
    result = 'text/css';
    break;
  case 'js':
    result = 'text/javascript';
    break;
  case ('jpg' || 'jpeg'):
    result = 'image/jpeg';
    break;
  case 'gif':
    result = 'image/gif';
    break;
  case 'bmp':
    result = 'image/bmp';
    break;
  case ('ico' || 'cur'):
    result = 'image/x-icon';
    break;
  case 'png':
    result = 'image/png';
    break;
  case 'svg':
    result = 'image/svg+xml';
    break;
  case 'webp':
    result = 'image/webp';
    break;
  case 'mp3':
    result = 'audio/mp3';
    break;
  case 'wav':
    result = 'audio/wav';
    break;
  case 'mp4':
    result = 'video/mp4';
    break;
  case 'webm':
    result = 'video/webm';
    break;
  case 'json':
    result = 'application/json';
    break;
  default:
    result = 'application/octet-stream';
  }
  return result;
}

/*******************************************************************************
 * Problem 8: extract the Forward Sortation Area (FSA) from a Postal Code
 *
 * The first three letters of a Canadian Postal Code are known as a forward
 * sortation area, and designate a geographic unit.  See details at:
 *
 * https://www.ic.gc.ca/eic/site/bsf-osb.nsf/eng/br03396.html and
 * https://en.wikipedia.org/wiki/Postal_codes_in_Canada#Components_of_a_postal_code
 *
 * Given a postal code, you are asked to extract the FSA.  If the resulting FSA
 * is invalid, you should throw an error message, otherwise return the extracted FSA.
 *
 * For example:
 *
 * extractFSA('M2J 2X5') --> returns 'M2J' (valid FSA for Newnham Campus)
 * extractFSA('2MJ X25') --> throws an Error with the message, 'invalid FSA'
 *
 *
 *
 * A valid FSA is defined as:
 *
 * - first character is a lProblem 1: remove all spaces and dashes from a String value, and make it lowercase.etter, one of A, B, C, E, G, H, J, K, L, M, N, P, R, S, T, V, X, Y (not D, F, I, O, Q, U, W)
 * - second character is a digit, one of 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
 * - third character is any letter (A to Z)
 *
 * @param {String} postalCode - a postal code
 ******************************************************************************/

function extractFSA(postalCode) {
  if (postalCode.length === 6)
  {
    if (postalCode[0] != D || F || I || O || Q || U || W)
    {
      if (postalCode[1] == /[0-9]/)
      {
        if (postalCode[2] == /[a-zA-Z]/)
        {
          console.log(postalCode.substring(0,3));
        }
      }
    }
  }
  else console.log('invalid FSA');
  return postalCode;
}

/*******************************************************************************
 * Problem 9: create a pure Boolean true/false value from a dataset
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats over the years, for example:
 *
 * Yes, yes, YES, Y, t, TRUE, true, True, 1
 * No, no, NO, N, n, f, FALSE, false, False, 0, null, undefined, -1
 *
 * Write a function pureBool() which takes a String, Number, Boolean,
 * null, or undefined and attempts to convert it into a pure Boolean value.
 *
 * If the value is not one of the values above, throw an error with the error
 * message, 'invalid boolean value'.
 *
 * @param {string|number|boolean|null|undefined} value - a value to convert to true/false
 * @returns {bool}
 ******************************************************************************/

function pureBool(value) {
  result = 0;
  if(yes||yes,YES,Y, t, TRUE, true, True, 1)
  {
    result = 1;
  }
  else if(No, no, NO, N, n, f, FALSE, false, False, 0, null, undefined, -1)
  {
    result = 0;
  }
  else
  {
    result = 0;
    console.log('invalid boolean value');
  }
	return result;
}

//alternatively

function pureBool(value){
  if (value === undefined || value === null)
    return false;
  var type = typeof value;
  if (type === 'boolean')
    return value;
  else if (type === 'number')
    return value > 0;
  else if (type === 'string'){
    value = value.toLowerCase();
    if (value === 'yes' || value === 'true' || value === 'y')
      return true;
    if (value === 'no' || value === 'false' || value === 'n' || value === 'f')
      return false;
  }
  return true;
}

//I didn't have this part back then at all. I add this for demonstration only.
/*******************************************************************************
 * Problem 9 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your pureBool() function, create two new functions to check
 * if a list of arguments are all normalized True or normalized False values:
 *
 * all('Y', 'yes', 1) --> returns true
 * all('Y', 'no', 1) --> returns false
 * all('Y', 'invalid', 1) --> returns false
 *
 * none('N', 'no', 0) --> returns true
 * none('Y', 'invalid', 1) --> returns false (i.e., does not throw)
 *
 * Use try/catch syntax to avoid having throw errors
 * when pureBool() throws on invalid data.
 ******************************************************************************/
function all(){
  var res = [];
  for (var i = 0; i < arguments.length; i++){
    res[i] = pureBool(arguments[i]);
  }
  if (result.every((result) => result = true)){
    return true;
  }
  else return false;
}

function none(){
  var res = [];
  for (var i = 0; i < arguments.length; i++){
    res[i] = pureBool(arguments[i]);
  }
  if (result.every((result) => result = false)){
    return true;
  }
  else return false;
}

/*******************************************************************************
 * Problem 10 - build a URL to query the iNaturalist Web API
 *
 * One of the data sources we'll be exploring in future assignments is
 * https://www.inaturalist.org.  Using iNaturalist, both hobbyist and professional
 * scientists can share sightings and help identify plants and animals in their
 * local area.
 *
 * As a web developer, you have access to this tremendous database of scientific
 * observations via the iNaturalist Web API (application programming interface):
 *
 * https://www.inaturalist.org/pages/api+reference#get-observations
 *
 * Querying the iNaturalist dataset for information involves formatting a URL
 * in a particular way.  As we know from week 1, a URL can contain optional
 * name=value pairs, see: https://web222.ca/weeks/week01/#urls
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - q: a search string, for example "butterfly" or "Horse-chestnut"
 * - per_page: a number from 1 to 200, indicating how many results to return per page
 * - order: a string indicating sort order, with possible values of `asc` or `desc`
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 * - lat: a number, indicating the latitude to use for results
 * - lng: a number, indicating the longitude to use for results.
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., perPage must be between 1 and 200, lat and lng
 * must be a valid coord, etc), and returns a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('butterfly', 50, 'asc', 'cc-by', 43.7955, -79.3496) should return
 * the following URL:
 *
 * https://api.inaturalist.org/v1/observations?q=butterfly&per_page=50&order=asc&license=cc-by&lat=43.7955&lng=-79.3496
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an exception should be thrown.
 *
 * NOTE: make sure you properly encode the q value, since URLs can't
 * contain spaces or certain other characters. HINT: use the encodeURIComponent()
 * function to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * @param {string} q the query to use. Must be properly URI encoded
 * @param {number} perPage the number of results per page, must be 1-200
 * @param {string} order the sort order to use, must be one of asc or desc
 * @param {string} license the license to use, must be one of none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 * @param {number} lat the latitude to use, must be a valid latitude (use validateCoord() function)
 * @param {number} lng the longitude to use, must be a valid longitude (use validateCoord() function)
 * @returns {string} the properly formatted iNaturalist URL
 ******************************************************************************/

function buildUrl(q, perPage, order, license, lat, lng) 
{
  var q = '<img src="'+src+'"';
  if (perPage >= 1 || perPage <= 200)
  {
    if (order == asc || desc)
    {
      if (license == none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd)
      {
        if (validateCoord(lat, lng))
        {
          console.log('https://api.inaturalist.org/v1/observations?q='+q+'&per_page='
          +perPage+'&order='+order+'&license='+license+'&lat='+lat+'&lng='+lng);
        }
      }
    }
  }
  else
    console.log('invalid');
}

// Our unit test files need to access the functions we defined
// above, so we export them here.
exports.greeting = greeting;

exports.crush = crush;
exports.createImg = createImg;
exports.parseDateString = parseDateString;
exports.toDateString = toDateString;
exports.validateCoord = validateCoord;

exports.formatCoord = formatCoord;
exports.formatCoords = formatCoords;

exports.mimeFromFilename = mimeFromFilename;
exports.extractFSA = extractFSA;

exports.pureBool = pureBool;
exports.all = all;
exports.none = none;

exports.buildUrl = buildUrl;