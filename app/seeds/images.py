from app.models import db, Entry, Image

def seed_images():
    entry = Entry.query.first()

    demo = Image(
        url = 'https://cff2.earth.com/uploads/2017/09/31200356/Nature-imagery-has-a-calming-effects-on-prisoners.jpg',
        entry_id = entry.id
    )

    db.session.add(demo)

    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images CASCADE;')
    db.session.commit()
