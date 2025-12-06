import { Box, CircularProgress, Typography } from '@mui/material';

const UserScore = ({ score = 0 }) => {
    
    // 1. 根据分数动态计算颜色 (模仿 TMDB 逻辑)
    const getColor = (value: number) => {
        if (value >= 70) return '#21d07a'; // 绿色 (高分)
        if (value >= 40) return '#d2d531'; // 黄色 (及格)
        return '#db2360';                  // 红色 (低分)
    };

    const trackColor = '#204529'; // 轨道的深色背景 (可选，根据主色调调整)
    const activeColor = getColor(score);

    return (
        <Box sx={{ 
            position: 'relative', 
            display: 'inline-flex', 
            backgroundColor: '#081c22', 
            borderRadius: '50%', 
            padding: '4px' }}
        >
            
            {/* 第一层：底部的灰色轨道 (Track) */}
            <CircularProgress
                variant="determinate"
                value={100} // 永远是满的
                size={50}   // 控制圆圈大小
                thickness={3.6}
                sx={{
                    color: 'rgba(255, 255, 255, 0.1)', // 半透明灰色
                }}
            />

            {/* 第二层：顶部的彩色进度条 (Indicator) */}
            <CircularProgress
                variant="determinate"
                value={score}
                size={50}   // 大小必须和底层一致
                thickness={3.6}
                sx={{
                    color: activeColor, // 动态颜色
                    position: 'absolute',
                    left: '4px', // 因为父容器有 padding: 4px，所以这里要偏移
                    top: '4px',
                    // 让进度条端点变圆 (可选)
                    [`& .MuiCircularProgress-circle`]: {
                        strokeLinecap: 'round',
                    },
                }}
            />

            {/* 第三层：中间的百分比文字 */}
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: 'white', fontWeight: 'bold', fontSize: '0.8rem' }}
                >
                    {score}%
                </Typography>
            </Box>
        </Box>
    );
};

export default UserScore;