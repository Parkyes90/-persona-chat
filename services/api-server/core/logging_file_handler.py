import os
import logging

class EnsureDirFileHandler(logging.FileHandler):
    def __init__(self, filename, mode='a', encoding=None, delay=False):
        directory = os.path.dirname(filename)
        if not os.path.exists(directory):
            os.makedirs(directory)
        logging.FileHandler.__init__(self, filename, mode, encoding, delay)
