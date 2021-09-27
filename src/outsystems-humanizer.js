var humanizerString = require( "@alduino/humanizer/string" );
var humanizerNumber = require( "@alduino/humanizer/number" );
var humanizerDateTime = require( "@alduino/humanizer/dateTime" );
var humanizerDateTimeDefaultStrategy = require( "../node_modules/@alduino/humanizer/dist/dateTime/DefaultDateTimeHumanizeStrategy.js" );

// Add wrappers for DateTime Humanizer object
var humanizerDateTimeWrapper = function( time, from, strategy ) {
	if ( ! strategy ) {
		strategy = new humanizerDateTimeDefaultStrategy.default();
	}
	return humanizerDateTime.default( time, from, strategy );
};

// Define the global Humanizer object
window.humanizer = {
	string: {
		humanize: humanizerString.humanize,
		dehumanize: humanizerString.dehumanize,
		singularize: humanizerString.singularize,
		pluralize: humanizerString.pluralize,
		truncate: humanizerString.truncate,
		truncateStrategies: {
			fixedLength: humanizerString.fixedLength,
			fixedNumberOfCharacters: humanizerString.fixedNumberOfCharacters,
			fixedNumberOfWords: humanizerString.fixedNumberOfWords
		},
		transform: humanizerString.transform,
		transformFunctions: {
			toTitleCase: humanizerString.toTitleCase,
			toLowerCase: humanizerString.toLowerCase,
			toUpperCase: humanizerString.toUpperCase,
			toSentenceCase: humanizerString.toSentenceCase
		},
		defaultVocabulary: humanizerString.defaultVocabulary
	},
	dateTime: {
		humanize: humanizerDateTimeWrapper
	},
	number: {
		words: humanizerNumber.words
	}
};
