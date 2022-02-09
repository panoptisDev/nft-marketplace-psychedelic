import { styled } from '../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  paddingBottom: '8px', // TODO: make variant
});

export const TableWrapper = styled('div', {
  position: 'relative',
  // marginTop: '44px', // TODO: make variant
  width: '100%',
  height: '100%',
  overflowX: 'auto',

  table: {
    borderSpacing: '0',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderImage: 'initial',
    width: 'inherit',
    background: '#FAFBFD',

    th: {
      textAlign: 'left',
      color: '#858585',
      fontSize: '16px',
      lineHeight: '22px',
      borderBottom: '1px solid #292929',
      whiteSpace: 'nowrap',
      // minWidth: '100px', // TODO: make variant
    },

    thead: {
      tr: {
        th: {
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '19px',
          color: '#23262F',
          padding: '25px 0px 25px 10px',
          borderTop: '1px solid #E5E8EB',
          borderBottom: '1px solid #E5E8EB',

          '&:first-child': {
            paddingLeft: '80px',
          },
        },
      },
    },

    tbody: {
      tr: {
        opacity: 1,
        background: '#FFFFFF',
        td: {
          fontWeight: '500',
          padding: '25px 0px 25px 10px',
          borderBottom: '1px solid #E5E8EB',
          whiteSpace: 'nowrap',

          '&:first-child': {
            paddingLeft: '80px',
          },
        },
        '&:hover': {
          background: '#F4F5F6',
          '.item-name': {
            color: '#2253FF',
          },
        },
      },
    },
  },

  // Variants
  variants: {
    type: {
      offers: {
        table: {
          background: '#FFFFFF',
          thead: {
            tr: {
              th: {
                color: '#777E90',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '19px',
                borderBottom: '1px solid #E5E8EB',
                padding: '10px 20px',

                '&:first-child': {
                  paddingLeft: '20px',
                },
              },
            },
          },
          tbody: {
            tr: {
              background: '#FAFBFD',
              td: {
                color: '#777E90',
                padding: '16px 20px',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '19px',
                borderBottom: '1px solid #E5E8EB',
                '&:first-child': {
                  paddingLeft: '20px',
                },
              },
              '&:last-child': {
                td: {
                  borderBottom: 'initial',
                },
              },
            },
          },
        },
      },

      nftActivity: {
        table: {
          background: '#FAFBFD',
          border: '1.5px solid #E5E8EB',
          boxSizing: 'border-box',
          borderRadius: '15px',
          thead: {
            tr: {
              th: {
                color: '#767D8E',
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '22px',
                borderTop: 'initial',
                borderBottom: '1px solid #E5E8EB',
                padding: '16px 20px',

                '&:first-child': {
                  paddingLeft: '20px',
                },
              },
            },
          },
          tbody: {
            tr: {
              background: '#FAFBFD',
              td: {
                color: '#23262F',
                padding: '24px 20px',
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '22px',
                borderBottom: '1px solid #E5E8EB',
                '&:first-child': {
                  paddingLeft: '20px',
                },
              },
              '&:last-child': {
                borderRadius: '15px',
                td: {
                  borderBottom: 'initial',
                  '&:first-child': {
                    borderRadius: '15px',
                  },
                  '&:last-child': {
                    borderRadius: '15px',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
});

export const ButtonWrapper = styled('div', {
  width: '98px',
  height: '33px',
});
