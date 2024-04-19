from flask import Blueprint, jsonify
from flask_cors import CORS
import csv

main = Blueprint('main', __name__)
 
import json
from engine import RecommendationEngine
 
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
 
from flask import Flask, request
 
@main.route("/<int:user_id>/ratings/top/<int:count>", methods=["GET"])
def top_ratings(user_id, count):
    logger.debug("User %s TOP ratings requested", user_id)
    top_ratings = recommendation_engine.get_top_ratings(user_id,count)
    return json.dumps(top_ratings)
 
@main.route("/<int:user_id>/ratings/<string:book_id>", methods=["GET"])
def book_ratings(user_id, book_id):
    logger.debug("User %s rating requested for book %s", user_id, book_id)
    hash_book_id = abs(hash(book_id)) % (10 ** 8)
    ratings = recommendation_engine.get_ratings_for_book_ids(user_id, [hash_book_id])
    return json.dumps(ratings)


@main.route("/<int:user_id>/ratings/<string:book_id>/<int:rating>", methods = ["GET"])
def add_ratings(user_id, book_id, rating):
    # get the ratings from the Flask POST request object
    # ratings_list = request.form.keys()[0].strip().split("\n")
    # ratings_list = map(lambda x: x.split(","), ratings_list)
    # ratings_list = (book_id, rating)
    # # create a list with the format required by the negine (user_id, book_id, rating)
    # ratings = map(lambda x: (user_id, int(x[0]), float(x[1])), ratings_list)
    ratings = [(user_id, abs(hash(book_id) % (10 ** 8)), rating)]
    # add them to the model using then engine API
    recommendation_engine.add_ratings(ratings)
    return json.dumps(ratings)


@main.route('/search/<string:title>', methods=['GET'])
def get_books(title):
    books = load_books()
    if title:
        result = search_books_by_title(books, title)
        return jsonify(result)
    else:
        return jsonify([])
    
def load_books():
    books = []
    with open('./datasets/BOOK/Books.csv', mode='r', encoding='utf-8') as file:
        reader = csv.DictReader(file, delimiter=';')
        for row in reader:
            books.append(row)
    return books

def search_books_by_title(books, title):
    result = []
    for book in books:
        if title.lower() in book['Book-Title'].lower():
            result.append(book)
    return result

 
def create_app(spark_context, dataset_path):
    global recommendation_engine 

    recommendation_engine = RecommendationEngine(spark_context, dataset_path)    
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(main)
    return app 
