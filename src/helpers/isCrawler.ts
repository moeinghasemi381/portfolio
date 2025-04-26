export default function isCrawler(userAgent: string | null): boolean {
    if (!userAgent) return false;
    const pattern = [
        'bot',
        'googlebot',
        'bingbot',
        'slurp',
        'yahoo',
        'duckduckbot',
        'teoma',
        'gigabot',
        'baiduspider',
        'yandexbot',
        'telegrambot',
        'telegramsbot',
        'telegram',
        'whatsapp',
        'viber',
        'twitter',
        'twitterbot',
        'facebookbot',
        'facebookexternalhit',
        'fb_iab',
        'instagram',
        'linkedin',
        'pinterest',
        'skype',
        'slack',
        'snapchat',
        'discord'
    ].join('|');
    const crawlerRegex = new RegExp(pattern, 'i');
    return crawlerRegex.test(userAgent);
}
