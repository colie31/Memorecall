from app.models import db, User, Journal
import random
# Generating random number number to contribute in creating
# a hex code to store in the database line 21
r = lambda: random.randint(0, 255)

def seed_journals():
    user = User.query.first()

    demo = Journal(
        name = 'My First Journal',
        color = '#ff9800',
        user_id = user.id
    )

    db.session.add(demo)

    for num in range(2, 18):
        demo2 = Journal(
            name = f'Journal {num}',
            color = '#{:02x}{:02x}{:02x}'.format(r(), r(), r()),
            user_id = user.id
        )
        db.session.add(demo2)

    db.session.commit()


def undo_journals():
    db.session.execute('TRUNCATE journals CASCADE;')
    db.session.commit()