import request from '@/utils/request'

export default {
    //1.根据课程id获取到章节小节的数据列表
    getAllChapterVideo(courseId) {
        return request({
            url: `/eduservice/chapter/getChapterVideo/${courseId}`,
            method: 'get'
        })
    },

    //添加章节
    addChapter(chapter) {
        return request({
            url: `/eduservice/chapter/addChapter`,
            method: 'post',
            data: chapter
        })
    },

    //根据id查询章节
    getChapter(chapterId) {
        return request({
            url: `/eduservice/chapter/getChapter/${chapterId}`,
            method: 'get'
        })
    },

    //修改章节
    updateChapter(chapter) {
        return request({
            url: `/eduservice/chapter/updateChapter`,
            method: 'post',
            data: chapter
        })
    },

    //删除章节
    deleteChapter(chapterId) {
        return request({
            url: `/eduservice/chapter/${chapterId}`,
            method: 'delete'
        })
    }
}