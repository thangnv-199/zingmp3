// export const GET_SONG_INFO = (code) => {
//     return `https://mp3.zing.vn/xhr/media/get-source?type=audio&key=${code}`;
// }

export const GET_SONG_SRC = (id) => {
    return `http://api.mp3.zing.vn/api/streaming/audio/${id}/128`;
}

export const GET_SONG_MV = (id) => {
    return `http://api.mp3.zing.vn/api/mobile/video/getvideoinfo?keycode=fafd463e2131914934b73310aa34a23f&requestdata={"id":"${id}"}`
}

export const SEARCH_SONG = (keyword) => {
    return `http://ac.mp3.zing.vn/complete?type=artist,song,key,code&num=500&query=${keyword}`
}

export const GET_SUGGESTIONS_SONG = (id) => {
    return `http://mp3.zing.vn/xhr/recommend?type=audio&id=${id}`
}

export const GET_ZINGCHART_SONG_DATA = `http://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1`