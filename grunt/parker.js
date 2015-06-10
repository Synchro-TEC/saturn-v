module.exports = {
  options: {
    metrics: [
      'TotalStylesheets',
      'TotalStylesheetSize',
      'TotalRules',
      'TotalSelectors',
      'TotalIdentifiers',
      'TotalDeclarations',
      'SelectorsPerRule',
      'IdentifiersPerSelector',
      'SpecificityPerSelector',
      'TopSelectorSpecificity',
      'TopSelectorSpecificitySelector',
      'TotalIdSelectors',
      'TotalUniqueColours',
      'UniqueColours',
      'TotalImportantKeywords',
      'TotalMediaQueries'
    ],
    file: '<%= path.reports %>/saturn-v.stats.md',
    usePackage: true
  },
  src: [
      '<%= path.css %>/*.css'
  ]
};
