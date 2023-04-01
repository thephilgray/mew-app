const EXTENSIONS_BY_FILETYPE = {
    'audio/wav': '.wav',
    'audio/s-wav': '.wav',
    'audio/x-wav': '.wav',
    'audio/aiff': '.aiff',
    'audio/x-aiff': '.aiff',
    'audio/mpeg': '.mp3',
    'audio/mp3': '.mp3',
    'audio/mpeg3': '.mp3',
    'audio/mpg': '.mp3',
    'audio/x-mp3': '.mp3',
    'audio/x-mpeg': '.mp3',
    'audio/x-mpeg3': '.mp3',
    'audio/x-mpg': '.mp3',
    'audio/mp4': '.mp4',
    'audio/m4a': '.m4a',
    'audio/x-m4a': '.m4a',
    'audio/ogg': '.ogg',
}

enum Group {
    admin = 'admin',
    editor = 'editor',
    member = 'member',
    community = 'community',
}

export { EXTENSIONS_BY_FILETYPE, Group }
