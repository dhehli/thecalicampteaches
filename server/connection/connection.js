import config from 'config';
import rethinkdbdash from 'rethinkdbdash';

const rethinkDB = rethinkdbdash(config.get('rethinkdb'));

export default rethinkDB;
