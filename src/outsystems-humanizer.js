var humanizerString = require( "@alduino/humanizer/string" );
var humanizerDateTime = require( "@alduino/humanizer/dateTime" );
var humanizerNumber = require( "@alduino/humanizer/number" );

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
		humanize: humanizerDateTime.default
	},
	number: {
		words: humanizerNumber.words
	}
};
