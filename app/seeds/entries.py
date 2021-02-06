from app.models import db, Journal, Entry, User, Category
import datetime

def seed_entries():
    user = User.query.first()
    journal = Journal.query.first()
    category = Category.query.first()

    demo = Entry(
        body = 'My first journal entry, How remarkable',
        date = datetime.datetime.now(),
        page_layout = 'layout_two',
        user_id = user.id,
        journal_id = journal.id,
        category_id = category.id
    )

    db.session.add(demo)

    db.session.commit()

def undo_entries():
    db.session.execute('TRUNCATE entries CASCADE;')
    db.session.commit()