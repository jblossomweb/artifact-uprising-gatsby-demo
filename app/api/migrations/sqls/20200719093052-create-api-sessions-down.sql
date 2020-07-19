DROP INDEX session_sid_pkey;
DROP INDEX "IDX_session_expire";
DROP TABLE api.sessions CASCADE;
DROP SCHEMA api;