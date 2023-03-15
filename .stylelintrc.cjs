module.exports = {
	extends: ["stylelint-config-recommended", "stylelint-config-standard"],
	rules: {
		"no-duplicate-selectors": true,
		"color-hex-length": "long",
		"color-named": "never",
		"declaration-no-important": true,
		"property-no-vendor-prefix": true,
		"value-no-vendor-prefix": true,
		"at-rule-no-vendor-prefix": true,
		"selector-no-vendor-prefix": true,
		"media-feature-name-no-vendor-prefix": true,
		"function-url-quotes": null,
		"font-family-name-quotes": null,
		"selector-class-pattern": null,
		"at-rule-no-unknown": {
			ignoreAtRules: ["design-tokens", "mixin", "define-mixin"],
		},
	},
};
