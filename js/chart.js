// Data gathered from http://populationpyramid.net/germany/2015/

// Age categories
var categories = [
    '21km', '20km', '19km', '18km', '17km', '16km', '15km',
    '14km', '13km', '12km', '11km', '10km', '9km', '8km',
    '7km', '6km', '5km', '4km', '3km', '2km', '1km'
];

Highcharts.chart('container', {
    chart: {
        backgroundColor: 'transparent',
        type: 'bar'
    },
    title: {
        text: ''
    },

    credits: {
        enabled: false
    },

    xAxis: [{
        title: {
            text: 'Kilometer',
            style: {
                color: '#FFFFFF',
                fontSize: '2rem',
                fontFamily: 'avenirNext'
            },
        },
        categories: categories,
        reversed: false,
        labels: {
            step: 1,
            style: {
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '0.75rem'
            },
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1,
            style: {
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '0.75rem'
            },
        }
    }],


    yAxis: [{
        title: {
            text: 'Pace',
            style: {
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontFamily: 'avenirNext'
            },
        },
        labels: {
            step: 2,
            style: {
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '0.75rem'
            },
            formatter: function () {
                return Math.abs(this.value) + 'min / km';
            }
        }
    }],

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    // TODO: Style with css
    legend: {
        style: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: '0.75rem'
        },
        // itemMarginTop: 10,
        // itemMarginBottom: 10,
    },

    tooltip: {
        formatter: function () {
            return 'Pace: <b>' + Highcharts.numberFormat(Math.abs(this.y)) + '</b> min/km'
        }
    },

    exporting: {
        enabled: false
    },


    // colors: ['#F2C314', '#FC3832'],


    series: [{
        name: 'Kevin',
        data: [
            -4.06, -4.12, -4.11, -4.14, -4.17, -3.51, -4.05, -4.02, -4.06, -3.56, -3.57, -4.00, -3.46, -4.15, -3.52, -4.03, -4.05, -3.54, -3.56, -3.50, -3.40,
        ],
        borderColor: 'transparent',
        color: {
            linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
            stops: [
                [0, '#191a1a'],
                [0.009, '#FC3832'],
                [1, '#F2C314']
            ]
        }
    }, {
        name: 'Severin',
        data: [
            4.26, 4.21, 4.25, 4.27, 4.25, 4.18, 4.15, 4.18, 4.23, 4.18, 4.26, 4.19, 4.02, 4.42, 4.08, 4.26, 4.20, 4.15, 4.02, 4.04, 4.09
        ],
        borderColor: 'transparent',
        color: {
            linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
            stops: [
                [0, '#F2C314'],
                [0.991, '#FC3832'],
                [1, '#191a1a'],
            ]
        }
    }]
});
