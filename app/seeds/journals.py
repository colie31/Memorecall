from app.models import db, User, Journal

def seed_journals():
    user = User.query.first()

    demo = Journal(
        name = 'My First Journal',
        color = '#ff9800',
        user_id = user.id
    )

    db.session.add(demo)

    db.session.commit()


def undo_journals():
    db.session.execute('TRUNCATE journals CASCADE;')
    db.session.commit()