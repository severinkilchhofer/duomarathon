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
        style: {
            color: '#fffd3d',
            fontWeight: 'bold',
        },
    },
    subtitle: {
        style: {
            color: '#24ff22',
            fontWeight: 'bold',
        },
        text: 'subtitle'
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        }
    }],


    yAxis: {
        title: {
            style: {
                color: '#FFFFFF',
                fontWeight: 'bold',
            },
            text: null
        },
        labels: {
            style: {
                color: '#FFFFFF',
                fontWeight: 'bold',
            },
            formatter: function () {
                return Math.abs(this.value) + '/km';
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
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
        name: 'Severin',
        data: [
            -4.06, -4.12, -4.11, -4.14, -4.17, -3.51, -4.05, -4.02, -4.06, -3.56, -3.57, -4.00, -3.46, -4.15, -3.52, -4.03, -4.05, -3.54, -3.56, -3.50, -3.40,
        ],
        borderColor: 'transparent',
        color: {linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
                [0, '#FC3832'],
                [1, '#F2C314']
            ]}
    }, {
        name: 'Kevin',
        data: [
            2.1, 2.0, 2.1, 2.3, 2.6,
            2.9, 3.2, 3.1, 2.9, 3.4,
            4.3, 4.0, 3.5, 2.9, 2.5,
            2.7, 2.2, 1.1, 0.6, 0.2,
            0.0
        ],
        borderColor: 'transparent',
        color: {linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
                [0, '#32FBFC'],
                [1, '#3214F2']
            ]}
    }]
});
