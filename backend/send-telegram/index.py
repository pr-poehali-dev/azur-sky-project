import json
import os
import urllib.request

def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в Telegram."""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    contact = body.get('contact', '').strip()
    desc = body.get('desc', '').strip()

    if not name or not contact:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Имя и контакт обязательны'}
        }

    text = (
        f"🎬 <b>Новая заявка на монтаж!</b>\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📱 <b>Контакт:</b> {contact}\n"
        f"📝 <b>Задача:</b> {desc or 'не указана'}"
    )

    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'HTML'
    }).encode('utf-8')

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
    urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }