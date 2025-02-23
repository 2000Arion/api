// Server data with location-based adjustments
const serverData_lb = {
    de: {
        standard: [
            { id: '${id(CAX11)}', vCPU: 2, RAM: 3, SSD: 30, hourly: 0.0073, monthly: 4.51, fees: 0.08 },
            { id: '${id(CAX21)}', vCPU: 4, RAM: 7, SSD: 70, hourly: 0.0124, monthly: 7.72, fees: 0.10 },
            { id: '${id(CAX31)}', vCPU: 8, RAM: 15, SSD: 150, hourly: 0.0200, monthly: 14.86, fees: 0.12 },
            { id: '${id(CAX41)}', vCPU: 16, RAM: 30, SSD: 310, hourly: 0.0466, monthly: 29.14, fees: 0.13 }
        ],
        premium_intel: [
            { id: '${id(CX22)}', vCPU: 2, RAM: 3, SSD: 30, hourly: 0.0070, monthly: 4.51, fees: 0.13 },
            { id: '${id(CX32)}', vCPU: 4, RAM: 7, SSD: 70, hourly: 0.0134, monthly: 8.09, fees: 0.17 },
            { id: '${id(CX42)}', vCPU: 8, RAM: 15, SSD: 150, hourly: 0.0325, monthly: 19.52, fees: 0.17 },
            { id: '${id(CX52)}', vCPU: 16, RAM: 30, SSD: 310, hourly: 0.0640, monthly: 38.56, fees: 0.21 }
        ],
        premium_amd: [
            { id: '${id(CPX11)}', vCPU: 2, RAM: 1.5, SSD: 30, hourly: 0.0084, monthly: 5.18, fees: 0.13 },
            { id: '${id(CPX21)}', vCPU: 3, RAM: 3, SSD: 70, hourly: 0.0140, monthly: 8.98, fees: 0.14 },
            { id: '${id(CPX31)}', vCPU: 4, RAM: 7, SSD: 150, hourly: 0.0261, monthly: 16.18, fees: 0.16 },
            { id: '${id(CPX41)}', vCPU: 8, RAM: 15, SSD: 230, hourly: 0.0496, monthly: 29.99, fees: 0.19 },
            { id: '${id(CPX51)}', vCPU: 16, RAM: 30, SSD: 350, hourly: 0.1050, monthly: 65.33, fees: 0.22 }
        ],
        dedicated: [
            { id: '${id(CCX13)}', vCPU: 2, RAM: 7, SSD: 70, hourly: 0.0200, monthly: 14.86, fees: 0.12 },
            { id: '${id(CCX23)}', vCPU: 4, RAM: 15, SSD: 150, hourly: 0.0466, monthly: 29.14, fees: 0.21 },
            { id: '${id(CCX33)}', vCPU: 8, RAM: 30, SSD: 230, hourly: 0.0925, monthly: 57.70, fees: 0.24 },
            { id: '${id(CCX43)}', vCPU: 16, RAM: 62, SSD: 350, hourly: 0.1840, monthly: 114.82, fees: 0.26 },
            { id: '${id(CCX53)}', vCPU: 32, RAM: 126, SSD: 590, hourly: 0.3671, monthly: 229.06, fees: 0.29 },
            { id: '${id(CCX63)}', vCPU: 48, RAM: 188, SSD: 950, hourly: 0.5501, monthly: 343.30, fees: 0.32 }
        ],
    },
    fi: {
        standard: [
            { id: '${id(CAX11)}', vCPU: 2, RAM: 3, SSD: 30, hourly: 0.0073, monthly: 4.51, fees: 0.08 },
            { id: '${id(CAX21)}', vCPU: 4, RAM: 7, SSD: 70, hourly: 0.0124, monthly: 7.72, fees: 0.10 },
            { id: '${id(CAX31)}', vCPU: 8, RAM: 15, SSD: 150, hourly: 0.0200, monthly: 14.86, fees: 0.12 },
            { id: '${id(CAX41)}', vCPU: 16, RAM: 30, SSD: 310, hourly: 0.0466, monthly: 29.14, fees: 0.13 }
        ],
        premium_intel: [
            { id: '${id(CX22)}', vCPU: 2, RAM: 3, SSD: 30, hourly: 0.0070, monthly: 4.51, fees: 0.13 },
            { id: '${id(CX32)}', vCPU: 4, RAM: 7, SSD: 70, hourly: 0.0134, monthly: 8.09, fees: 0.17 },
            { id: '${id(CX42)}', vCPU: 8, RAM: 15, SSD: 150, hourly: 0.0325, monthly: 19.52, fees: 0.17 },
            { id: '${id(CX52)}', vCPU: 16, RAM: 30, SSD: 310, hourly: 0.0640, monthly: 38.56, fees: 0.21 }
        ],
        premium_amd: [
            { id: '${id(CPX11)}', vCPU: 2, RAM: 1.5, SSD: 30, hourly: 0.0084, monthly: 5.18, fees: 0.13 },
            { id: '${id(CPX21)}', vCPU: 3, RAM: 3, SSD: 70, hourly: 0.0140, monthly: 8.98, fees: 0.14 },
            { id: '${id(CPX31)}', vCPU: 4, RAM: 7, SSD: 150, hourly: 0.0261, monthly: 16.18, fees: 0.16 },
            { id: '${id(CPX41)}', vCPU: 8, RAM: 15, SSD: 230, hourly: 0.0496, monthly: 29.99, fees: 0.19 },
            { id: '${id(CPX51)}', vCPU: 16, RAM: 30, SSD: 350, hourly: 0.1050, monthly: 65.33, fees: 0.22 }
        ],
        dedicated: [
            { id: '${id(CCX13)}', vCPU: 2, RAM: 7, SSD: 70, hourly: 0.0200, monthly: 14.86, fees: 0.12 },
            { id: '${id(CCX23)}', vCPU: 4, RAM: 15, SSD: 150, hourly: 0.0466, monthly: 29.14, fees: 0.21 },
            { id: '${id(CCX33)}', vCPU: 8, RAM: 30, SSD: 230, hourly: 0.0925, monthly: 57.70, fees: 0.24 },
            { id: '${id(CCX43)}', vCPU: 16, RAM: 62, SSD: 350, hourly: 0.1840, monthly: 114.82, fees: 0.26 },
            { id: '${id(CCX53)}', vCPU: 32, RAM: 126, SSD: 590, hourly: 0.3671, monthly: 229.06, fees: 0.29 },
            { id: '${id(CCX63)}', vCPU: 48, RAM: 188, SSD: 950, hourly: 0.5501, monthly: 343.30, fees: 0.32 }
        ],
    },
    us: {
        premium_amd: [
            { id: '${id(CPX11)}', vCPU: 2, RAM: 1.5, SSD: 30, hourly: 0.0100, monthly: 5.94, fees: 0.13 },
            { id: '${id(CPX21)}', vCPU: 3, RAM: 3, SSD: 70, hourly: 0.0182, monthly: 11.29, fees: 0.14 },
            { id: '${id(CPX31)}', vCPU: 4, RAM: 7, SSD: 150, hourly: 0.0315, monthly: 19.62, fees: 0.16 },
            { id: '${id(CPX41)}', vCPU: 8, RAM: 15, SSD: 230, hourly: 0.0582, monthly: 36.28, fees: 0.19 },
            { id: '${id(CPX51)}', vCPU: 16, RAM: 30, SSD: 350, hourly: 0.1150, monthly: 71.98, fees: 0.22 }
        ],
        dedicated: [
            { id: '${id(CCX13)}', vCPU: 2, RAM: 7, SSD: 70, hourly: 0.0258, monthly: 16.05, fees: 0.12 },
            { id: '${id(CCX23)}', vCPU: 4, RAM: 15, SSD: 150, hourly: 0.0506, monthly: 31.52, fees: 0.21 },
            { id: '${id(CCX33)}', vCPU: 8, RAM: 30, SSD: 230, hourly: 0.0960, monthly: 60.08, fees: 0.24 },
            { id: '${id(CCX43)}', vCPU: 16, RAM: 62, SSD: 350, hourly: 0.1917, monthly: 119.58, fees: 0.26 },
            { id: '${id(CCX53)}', vCPU: 32, RAM: 126, SSD: 590, hourly: 0.3823, monthly: 238.58, fees: 0.29 },
            { id: '${id(CCX63)}', vCPU: 48, RAM: 188, SSD: 950, hourly: 0.5731, monthly: 357.58, fees: 0.32 }
        ],
    },
    sg: {
        premium_amd: [
            { id: '${id(CPX11)}', vCPU: 2, RAM: 1.5, SSD: 30, hourly: 0.0151, monthly: 9.40, fees: 0.13 },
            { id: '${id(CPX21)}', vCPU: 3, RAM: 3, SSD: 70, hourly: 0.0278, monthly: 17.37, fees: 0.14 },
            { id: '${id(CPX31)}', vCPU: 4, RAM: 7, SSD: 150, hourly: 0.0482, monthly: 30.11, fees: 0.16 },
            { id: '${id(CPX41)}', vCPU: 8, RAM: 15, SSD: 230, hourly: 0.0822, monthly: 51.29, fees: 0.19 },
            { id: '${id(CPX51)}', vCPU: 16, RAM: 30, SSD: 350, hourly: 0.1480, monthly: 92.11, fees: 0.22 }
        ],
        dedicated: [
            { id: '${id(CCX13)}', vCPU: 2, RAM: 7, SSD: 70, hourly: 0.0411, monthly: 25.59, fees: 0.12 },
            { id: '${id(CCX23)}', vCPU: 4, RAM: 15, SSD: 150, hourly: 0.0760, monthly: 47.48, fees: 0.21 },
            { id: '${id(CCX33)}', vCPU: 8, RAM: 30, SSD: 230, hourly: 0.1400, monthly: 89.13, fees: 0.24 },
            { id: '${id(CCX43)}', vCPU: 16, RAM: 62, SSD: 350, hourly: 0.2623, monthly: 163.63, fees: 0.26 },
            { id: '${id(CCX53)}', vCPU: 32, RAM: 126, SSD: 590, hourly: 0.5620, monthly: 350.46, fees: 0.29 },
            { id: '${id(CCX63)}', vCPU: 48, RAM: 188, SSD: 950, hourly: 0.9201, monthly: 574.18, fees: 0.32 }
        ]
    }
};
