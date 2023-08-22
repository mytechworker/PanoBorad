export const ReportSizes = (type: string) => {
  switch (type) {
    case 'visits':
      return {
        width: 5,
        height: 4,
        location: {
          i: 'visits',
          x: 0,
          y: 0,
          w: 5,
          h: 4,
          minwidth: 5,
          report_type: 'visits',
        },
      };
    case 'recare':
      return {
        width: 5,
        height: 4,
        location: {
          i: 'recare',
          x: 5,
          y: 0,
          w: 5,
          h: 4,
          minwidth: 5,
          report_type: 'recare',
        },
      };
    case 'production':
      return {
        width: 10,
        height: 4,
        location: {
          i: 'production',
          x: 0,
          y: 4,
          w: 10,
          h: 4,
          report_type: 'production',
        },
      };
    case 'restorative_elective':
      return {
        width: 5,
        height: 6,
        location: {
          i: 'restorative_elective',
          x: 0,
          y: 6,
          w: 5,
          h: 6,
          minwidth: 5,

          report_type: 'restorative_elective',
        },
      };
    case 'hygiene':
      return {
        width: 5,
        height: 6,
        location: {
          i: 'hygiene',
          x: 5,
          y: 6,
          w: 5,
          h: 6,
          minwidth: 5,

          report_type: 'hygiene',
        },
      };
    case 'new_patients':
      return {
        width: 5,
        height: 6,
        location: {
          i: 'new_patients',
          x: 0,
          y: 12,
          w: 5,
          h: 6,
          minwidth: 5,

          report_type: 'new_patients',
        },
      };
    case 'reappointment':
      return {
        width: 5,
        height: 3,
        location: {
          i: 'reappointment',
          x: 5,
          y: 12,
          w: 5,
          h: 3,
          minwidth: 5,

          report_type: 'reappointment',
        },
      };
    case 'cancellations':
      return {
        width: 5,
        height: 3,
        location: {
          i: 'cancellations',
          x: 5,
          y: 16,
          w: 5,
          h: 3,
          minwidth: 5,

          report_type: 'cancellations',
        },
      };
    default:
      return {
        width: 5,
        height: 4,
        location: {
          i: 'any',
          x: 0,
          y: 0,
          w: 5,
          h: 4,
          report_type: 'any',
        },
      };
  }
};
