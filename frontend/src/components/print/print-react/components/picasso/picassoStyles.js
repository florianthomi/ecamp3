import { StyleSheet } from '@react-pdf/renderer'

const picassoFooterFontSize = 9
const dayHeaderFontSize = 9
const dayResponsiblesFontSize = 8
const scheduleEntryFontSize = 8
const timeColumnFontSize = 8

const timeColumnVerticalOffset = timeColumnFontSize / 2.0 + 2 // this might need to be adjusted if we change the font

const picassoStyles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '-6pt',
    alignItems: 'baseline',
  },
  title: {
    flexGrow: '1',
  },
  ysLogo: {
    alignSelf: 'flex-start',
    marginLeft: '3pt',
    size: 20,
  },
  calendarContainer: {
    border: '1pt solid grey',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    lineHeight: 1,
  },
  timeColumn: (width) => ({
    width: width,
    flexGrow: 0,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
  }),
  timeColumnAbsolutePositionContainer: {
    // Wrapping the time column in this absolutely positioned View is necessary, because otherwise the text
    // in the time column breaks layouting of the texts inside the schedule entries.
    position: 'absolute',
    top: -timeColumnVerticalOffset,
    bottom: timeColumnVerticalOffset,
    left: 0,
    right: 0,
  },
  timeColumnRow: {
    paddingHorizontal: '2pt',
    flexBasis: 0, // this should match the height of the borders on the day grid rows. 0 means no borders
  },
  timeColumnText: {
    fontSize: timeColumnFontSize + 'pt',
  },
  dayHeader: {
    flexBasis: 0,
    flexGrow: 1,
    overflow: 'hidden',
    padding: '4pt 0 5pt',
    display: 'flex',
    flexDirection: 'column',
  },
  dayHeaderText: {
    fontSize: dayHeaderFontSize + 'pt',
    fontWeight: 'bold',
    margin: '0 auto 2pt',
  },
  dayResponsibles: {
    fontSize: dayResponsiblesFontSize + 'pt',
    margin: '3pt auto 0',
  },
  dayColumn: {
    flexBasis: 0,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'relative',
  },
  dayGrid: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  dayGridRow: {
    display: 'flex',
    flexBasis: 0,
  },
  scheduleEntryContainer: {
    margin: '0 2pt',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
  },
  scheduleEntry: {
    position: 'absolute',
    borderRadius: '2pt',
    padding: '0 4pt',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  scheduleEntryTitle: {
    fontSize: scheduleEntryFontSize + 'pt',
    height: 2 * scheduleEntryFontSize + 'pt',
    lineHeight: 1,
    flexGrow: 1,
  },
  scheduleEntryResponsiblesContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: '0 4pt',
  },
  scheduleEntryResponsible: {
    flexShrink: '0',
  },
  scheduleEntrySpacer: {
    height: 0,
    maxHeight: '4pt',
    flexGrow: 1,
  },
  categories: {
    fontSize: picassoFooterFontSize,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '2pt 0 0',
    gap: '2pt',
  },
  category: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: '2pt',
    marginRight: '2pt',
  },
  picassoFooter: {
    width: '100%',
    fontSize: picassoFooterFontSize,
    display: 'flex',
    flexDirection: 'row',
    marginTop: '6pt',
    border: '1pt solid grey',
    padding: '0 0 3pt',
  },
  picassoFooterColumn: {
    flexGrow: '1',
    maxWidth: '33%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '6pt',
    lineHeight: 1,
    padding: '2pt 3pt 3pt',
  },
})

export default picassoStyles
