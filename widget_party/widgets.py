# -*- coding: utf-8 -*-
from dashing.widgets import Widget


class BuildStatusWidget(Widget):
    title = ''
    updated_at = ''
    buildnumber = 0
    buildstatus = 'progress'

    def get_title(self):
        return self.title

    def get_updated_at(self):
        return self.updated_at

    def get_buildnumber(self):
        return self.buildnumber

    def get_buildstatus(self):
        return self.buildstatus

    def get_context(self):
        return {
            'title': self.get_title(),
            'updatedAt': self.get_updated_at(),
            'buildNumber': self.get_buildnumber(),
            'buildStatus': self.get_buildstatus(),
        }
