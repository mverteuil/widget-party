# -*- coding: utf-8 -*-
from dashing.widgets import Widget


class BuildStatusWidget(Widget):
    title = ''
    updated_at = ''
    buildnumber = 0
    status = 'progress'

    def get_title(self):
        return self.title

    def get_updated_at(self):
        return self.updated_at

    def get_buildnumber(self):
        return self.buildnumber

    def get_status(self):
        return self.status

    def get_context(self):
        return {
            'title': self.get_title(),
            'updated_at': self.get_updated_at(),
            'buildnumber': self.get_buildnumber(),
            'status': self.get_status(),
        }
