CREATE SCHEMA api;

CREATE TABLE api.sessions (
    sid character varying PRIMARY KEY,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);

CREATE UNIQUE INDEX session_sid_pkey ON api.sessions(sid text_ops);
CREATE INDEX "IDX_session_expire" ON api.sessions(expire timestamp_ops);
